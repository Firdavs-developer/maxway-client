import { Container } from "@radix-ui/themes";
import PitsaCard from "../pitsa-card/PitsaCard";

function Pitsa() {
  return (
    <div>
      <Container className="pt-[105px] ">
        <h2 className="text-[52px] font-sans font-bold text-[#222124] mb-[30px]">
          Pitsa
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <PitsaCard
            pitsaImg={"/images/gavana.png"}
            pitseText={"Gavana"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"45,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/mexika.png"}
            pitseText={"Mexika"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"53,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/achico.png"}
            pitseText={"Hot achchiko"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"64,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/gavana.png"}
            pitseText={"Gavana"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"45,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/mexika.png"}
            pitseText={"Mexika"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"53,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/achico.png"}
            pitseText={"Hot achchiko"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"64,000 UZS"}
          />
          <PitsaCard
            pitsaImg={"/images/mexika.png"}
            pitseText={"Mexika"}
            pitsaIcon={"/images/sir.png"}
            pitsaParagraph={
              "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле "
            }
            pitsaPrice={"53,000 UZS"}
          />
        </div>
      </Container>
    </div>
  );
}

export default Pitsa;
