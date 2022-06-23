import animatePresence from "@/components/AnimatePresence";

function User() {
  return <h1>user</h1>;
}

export default animatePresence(User, {
  animationType: "onlyFadeIn",
});
