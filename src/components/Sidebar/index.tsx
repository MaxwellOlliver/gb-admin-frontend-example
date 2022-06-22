import { Container } from "./styles";
import { sidebar as options, sidebar } from "@/config/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { classNames } from "@/utils/classNames";
import { dashboardPathPrefix } from "@/routes/routes";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/context/Sidebar";
import { FiChevronDown, FiChevronRight, FiTruck, FiX } from "react-icons/fi";
import { theme } from "@/config/theme";
import Accordion from "@/@core/components/Accordion";
import useResize from "@/hooks/useResize";
import useSidebar from "@/hooks/useSidebar";
import { ReactComponent as Logo } from "@/assets/logo-small.svg";

export default function Sidebar(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabsOpen, setTabsOpen] = useState<Record<number, any>>({});
  const { width } = useResize();
  const [activeCategory, setActiveCategory] = useState(sidebar[0]);
  const [subCategoriesIsOpen, setSubCategoriesIsOpen] = useState<
    Record<string, boolean>
  >({});

  const { isOpen, toggle, closeSidebar } = useSidebar();

  const handleToggleTab = (index: number) =>
    setTabsOpen((state) => ({ ...state, [index]: !state[index] as boolean }));

  const handleCloseAllTabs = (tabIndex?: number) =>
    setTabsOpen(tabIndex ? { [tabIndex]: true } : {});

  // const handleClickSidebarOpt = (
  //   opt: ISidebarOptions,
  //   index: number,
  //   tabIndex?: number
  // ) => {
  //   if (
  //     opt.type === "link" &&
  //     opt.path !== null &&
  //     typeof opt.path === "string"
  //   ) {
  //     navigate(opt.path);
  //     if (width < 1200) {
  //       toggle();
  //       handleCloseAllTabs(tabIndex);
  //     }
  //   } else if (opt.type === "tab") {
  //     handleToggleTab(index);
  //   }
  // };

  function toggleSubCategoriesIsOpen(id: string) {
    if (subCategoriesIsOpen[id]) {
      setSubCategoriesIsOpen((state) => ({ ...state, [id]: false }));
    } else {
      setSubCategoriesIsOpen((state) => ({ ...state, [id]: true }));
    }
  }

  function renderSidebarCategories() {
    return sidebar.map((category) => (
      <li
        key={category.id}
        className={classNames({
          "--active": activeCategory.id === category.id,
        })}
        onClick={() => setActiveCategory(category)}
      >
        <category.icon size={20} />
        <div className="category__border"></div>
      </li>
    ));
  }

  function renderSidebarSubCategories() {
    return activeCategory.subCategories.map((subCategory) => (
      <>
        <li
          key={subCategory.id}
          className={classNames("--subcategory", {
            "--active": subCategoriesIsOpen[subCategory.id],
          })}
          onClick={() => toggleSubCategoriesIsOpen(subCategory.id)}
        >
          <span>{subCategory.title}</span>
          <FiChevronRight />
        </li>
        <Accordion isOpen={subCategoriesIsOpen[subCategory.id]}>
          {(ref) => (
            <ul className="subcategory__accordion" ref={ref}>
              {subCategory.links.map((link) => (
                <li key={link.id} className="--link">
                  {link.title}
                </li>
              ))}
            </ul>
          )}
        </Accordion>
      </>
    ));
  }

  return (
    <Container>
      <div
        className={classNames("sidebar-overlay", {
          show: isOpen,
        })}
        onClick={() => isOpen && toggle()}
      ></div>
      <div
        className={classNames("sidebar", {
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
        </div>
        <div className="sidebar__right-menu">
          <header className="right-menu__active-category">
            <FiTruck size={26} />
            <h4>ENTREGAS</h4>
          </header>
          <ul className="right-menu__subcategories">
            {renderSidebarSubCategories()}
          </ul>
        </div>
      </div>
    </Container>
  );
}
