import {Fragment, useEffect, useState} from 'react';
import {FiChevronRight} from 'react-icons/fi';
import {useLocation, useNavigate} from 'react-router-dom';

import Accordion from '@/@core/components/Accordion';

import {ReactComponent as Logo} from '@/assets/logo-small.svg';
import {ReactComponent as SidebarToggle} from '@/assets/open-side.svg';
import {sidebar, SidebarCategory, SidebarSubCategory} from '@/config/sidebar';
import useSidebar from '@/hooks/useSidebar';
import {dashboardPathPrefix} from '@/routes/routes';
import {classNames} from '@/utils/classNames';
import {Container} from './styles';

export default function Sidebar(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(sidebar[0]);
  const [subCategoriesIsOpen, setSubCategoriesIsOpen] = useState<
    Record<string, boolean>
  >({});

  const {isOpen, toggle, closeSidebar} = useSidebar();

  function isActive(subCategory: SidebarSubCategory) {
    const subCategories = activeCategory.subCategories;

    const linkedOptions = subCategories
      ? subCategories.filter(
          (linkedOpt: SidebarSubCategory) =>
            linkedOpt.linkedTo === subCategory.id,
        )
      : [];

    const active =
      (subCategory.type === 'link' &&
        new RegExp(
          `^${dashboardPathPrefix}${subCategory.path?.replace(
            /:\w+/g,
            '\\w+',
          )}$`,
          'g',
        ).test(location.pathname)) ||
      linkedOptions.some((linkedOpt: SidebarSubCategory) =>
        new RegExp(
          `^${dashboardPathPrefix}${linkedOpt.path?.replace(/:\w+/g, '\\w+')}$`,
          'g',
        ).test(location.pathname),
      ) ||
      (subCategory.type === 'accordion' && subCategoriesIsOpen[subCategory.id]);

    return active;
  }

  useEffect(() => {
    const activeCategory = sidebar.find((category) => {
      const subCategoriesLink = category.subCategories.filter(
        (subCategory) => subCategory.type === 'link',
      );
      const subCategoriesAccordion = category.subCategories.filter(
        (subCategory) => subCategory.type === 'accordion',
      );

      if (subCategoriesLink.some((link) => isActive(link))) {
        return true;
      }
      if (
        subCategoriesAccordion.find((subCategory) => {
          return (
            subCategory.childrens &&
            subCategory.childrens.length > 0 &&
            subCategory.childrens.some((subChildren) => isActive(subChildren))
          );
        })
      ) {
        return true;
      }
    });

    if (!activeCategory) return;

    const hasSubCategoryActive = activeCategory.subCategories.find(
      (subCategory) => {
        return (
          subCategory.type === 'accordion' &&
          subCategory.childrens &&
          subCategory.childrens.length > 0 &&
          subCategory.childrens.some((subChildren) => isActive(subChildren))
        );
      },
    );

    if (hasSubCategoryActive) {
      setSubCategoriesIsOpen((state) => ({
        ...state,
        [hasSubCategoryActive.id]: true,
      }));
    }

    setActiveCategory(activeCategory);
  }, []);

  function dashboardNavigate(path: string) {
    navigate(`${dashboardPathPrefix}${path}`);
    closeSidebar();
  }

  function toggleSubCategoriesIsOpen(id: string) {
    if (subCategoriesIsOpen[id]) {
      setSubCategoriesIsOpen((state) => ({...state, [id]: false}));
    } else {
      setSubCategoriesIsOpen((state) => ({...state, [id]: true}));
    }
  }

  function handleChangeActiveCategory(category: SidebarCategory) {
    if (category.id === activeCategory.id && isOpen) {
      closeSidebar();
      return;
    }

    setSubCategoriesIsOpen({});
    setActiveCategory(category);

    const hasSubCategoryActive = category.subCategories.find((subCategory) => {
      return (
        subCategory.type === 'accordion' &&
        subCategory.childrens &&
        subCategory.childrens.length > 0 &&
        subCategory.childrens.some((subChildren) => isActive(subChildren))
      );
    });

    if (hasSubCategoryActive) {
      setSubCategoriesIsOpen((state) => ({
        ...state,
        [hasSubCategoryActive.id]: true,
      }));
    }

    if (!isOpen) {
      toggle();
    }
  }

  function renderSidebarCategories() {
    return sidebar.map((category) => (
      <li
        key={category.id}
        className={classNames({
          '--active': activeCategory.id === category.id,
        })}
        onClick={() => handleChangeActiveCategory(category)}
      >
        <category.icon size={20} />
        <div className="category__border"></div>
      </li>
    ));
  }

  function renderSidebarSubCategories() {
    return activeCategory.subCategories
      .filter((subCategory) => subCategory.type !== 'hidden')
      .map((subCategory) => {
        const isAccordion = subCategory.type === 'accordion';
        const isSubCategoryActive = isActive(subCategory);

        return (
          <Fragment key={subCategory.id}>
            <li
              className={classNames({
                '--subcategory': isAccordion,
                '--link': subCategory.type === 'link',
                '--active': isSubCategoryActive,
              })}
              onClick={() => {
                if (isAccordion) {
                  toggleSubCategoriesIsOpen(subCategory.id);
                } else if (subCategory.path) {
                  dashboardNavigate(subCategory.path);
                }
              }}
            >
              <span>{subCategory.title}</span>
              <div className="subcategory__border"></div>
              {isAccordion && <FiChevronRight />}
            </li>
            {isAccordion &&
              subCategory.childrens &&
              subCategory.childrens.length > 0 && (
                <Accordion
                  isOpen={subCategoriesIsOpen[subCategory.id]}
                  key={`accordion-${subCategory.id}`}
                >
                  {(ref) => (
                    <ul className="subcategory__accordion" ref={ref}>
                      {/* {renderSidebarSubCategories(subCategory.childrens)} */}
                      {subCategory.childrens?.map((subChildren) => {
                        const isSubChildrenActive = isActive(subChildren);
                        return (
                          <li
                            key={subChildren.id}
                            className={classNames('--link', {
                              '--active': isSubChildrenActive,
                            })}
                            onClick={() =>
                              subChildren.path &&
                              dashboardNavigate(subChildren.path)
                            }
                          >
                            {subChildren.title}
                            <div className="subcategory__border"></div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Accordion>
              )}
          </Fragment>
        );
      });
  }

  return (
    <Container>
      <div
        className={classNames('sidebar-overlay', {
          show: isOpen,
        })}
        onClick={() => isOpen && toggle()}
      >
        teste
      </div>
      <div
        className={classNames('sidebar', {
          open: isOpen,
        })}
      >
        <div className="sidebar__left-menu">
          <div className="left-menu__categories-wrapper">
            <Logo className="categories-wrapper__logo" />
            <ul className="categories-wrapper__categories">
              {renderSidebarCategories()}
            </ul>
          </div>
          <SidebarToggle
            width={16}
            height={16}
            onClick={toggle}
            className={classNames({
              '--is-open': isOpen,
            })}
          />
        </div>
        <div className="sidebar__right-menu">
          <header className="right-menu__active-category">
            <activeCategory.icon size={26} />
            <h4>{activeCategory.title}</h4>
          </header>
          <ul className="right-menu__subcategories">
            {renderSidebarSubCategories()}
          </ul>
        </div>
      </div>
    </Container>
  );
}
