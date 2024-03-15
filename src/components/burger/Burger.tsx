import { Container } from "@radix-ui/themes";
import PitsaCard from "../pitsa-card/PitsaCard";
function Burger() {
  return (
    <div>
      <Container className="pt-[105px]">
        <h2 className="text-[52px] font-sans font-bold text-[#222124] mb-[30px]">
          Burger
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-[30px]">
          <PitsaCard
            pitsaImg={"/images/cheeseburger.png"}
            pitseText={"Cheeseburger"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"23,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/chili.png"}
            pitseText={"Chili Burger"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"23,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/hamburger.png"}
            pitseText={"Hamburger"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"23,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/chili.png"}
            pitseText={"Double Burger"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"23,000 UZS"}
          />
        </div>
      </Container>
    </div>
  );
}

export default Burger;
