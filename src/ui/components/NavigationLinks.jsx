import NavigationLink from "./NavigationLink";

function NavigationLinks() {
  return (
    <ul className="flex items-center gap-x-[34px] text-sm font-bold text-white">
      <NavigationLink text={"Stake"} to={"/"} />
      <NavigationLink text={"Lend"} to={"/"} />
      <NavigationLink text={"Burrow"} to={"/"} />
      <NavigationLink text={"Portfolio"} to={"/portfolio"} />
    </ul>
  );
}

export default NavigationLinks;
