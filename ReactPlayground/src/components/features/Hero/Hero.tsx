import heroImg from "../../../assets/hero.png";
import SearchInput from "../../ui/SearchInput";
import Button from "../../ui/Button";

function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-[25px] place-content-center flex-grow max-lg:px-5 max-lg:pt-8 max-lg:pb-6 max-lg:gap-[18px]">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <form action="">
          <SearchInput />
        </form>
      </div>
      <div className="flex">
        <img src={heroImg} className="w-[100px] h-auto mx-auto" width="170" height="179" alt="" />
        <div>
          <p>Welcome to My Dev Space</p>
          <Button>View My Projects</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
