let map;

const image = document.getElementById("image");
const name = document.getElementById("name");
const description = document.getElementById("description");
const bar = document.getElementById("contentBar");
const full = document.getElementById("full");

const graffitiList = [
  {
    name: "School number 12 (Chui Ave. - Gogol St.)",
    description:
      "“I-Gul” is one of the most famous works of Bishkek street art, the modernized look of Semyon Chuikov's painting “The Daughter of Soviet Kyrgyzstan“ was created in 2014 by the “DOXA“ Art-group. “We wanted to involve young people in Chuikov's work in this way,” Petrovsky explained.",
    longitude: 42.874975,
    latitude: 74.621335,
    image: "",
  },
  {
    name: "Computer Gymnasium No. 5 (Toktogul St.)",
    description:
      "The graffiti “Clean environment“ depicts a basketball player who throws a garbage bag into a container. The art project was implemented within the framework of the “I love Bishkek“ project in 2016 by members of the “BASICOLORS“ art group. Street art urges citizens not to litter the streets of the capital.",
    longitude: 42.871589,
    latitude: 74.614452,
    image: "",
  },
  {
    name: "9-storey building (Shopokov street - Bokonbaev)",
    description:
      "“Idea, Perfection, Life“ Boy with a watering can, by Doxa. The work was done in 2014 by order of a construction company. “The boy waters the house and he grows up. The point is that you need to build your future from childhood,” say the artists.",
    longitude: 42.86632,
    latitude: 74.615015,
    image: "",
  },
  {
    name:
      "Facade of the Kyrgyz State Music College named after M. Kurenkeev (Moskovskaya St., between Logvinenko and Panfilov)",
    description:
      "The graffiti “Boy and Birds“ was created in 2016 as part of the large-scale art project “I love Bishkek“ by members of the BASICOLORS art group. The drawing of a boy who is careful with nature encourages the townspeople not to litter the streets and to think about the state of the environment.",
    longitude: 42.869908,
    latitude: 74.599913,
    image: "",
  },
  {
    name:
      "Graffiti on the wall of the “Kyrgyz Concept“ office (Chui ave. - Logvinenko st.)",
    description:
      "The graffiti “Little girl“ was commissioned by the Kyrgyz Concept office in 2014.",
    longitude: 42.875805,
    latitude: 74.599747,
    image: "",
  },
  {
    name:
      "Building of the women's hostel of the Bishkek Medical College (Logvinenko st.)",
    description:
      "In November 2018, the Women's Support Center, with the support of UN Women, implemented a project - a portrait of Burulai Turdali kyzy appeared on the walls of the women's dormitory of the Bishkek Medical College, who was killed in the building of the Zhayil District Department of Internal Affairs by a man who wanted to kidnap her for marriage. The opening of street art was timed to coincide with a nationwide campaign to defend human rights. The graffiti was made by the artist “DOXA“ Art-group Sergey Keller",
    longitude: 42.883649,
    latitude: 74.599418,
    image: "",
  },
  {
    name: "Behind the Osh market (Chui avenue - T. Aitmatova st.)",
    description:
      "The graffiti “Family“ was made by “DOXA“ Art-group with the support of UNICEF within the framework of the program to protect children from violence. The drawing was applied to the wall of the Setun plant, in 2015.                            Previously, street art was better visible to the townspeople, now, due to the extension of the Sultan cafe, it is completely impossible to see the drawing.",
    longitude: 42.877265,
    latitude: 74.565574,
    image: "",
  },
  {
    name: "House in the Jal-23 micro district",
    description:
      "“Writer Chingiz Aimatov“, May 2019. The artists called this work a gift to Bishkek residents for the City Day; it was commissioned by the chairman of the Bishkek city council, Zhanybek Abirov.",
    longitude: 42.830262,
    latitude: 74.568853,
    image: "",
  },
  {
    name: "Residential building (Donetskaya-Karl Marx st.)",
    description:
      "Street art “Little Princess“ was created with the support of UNICEF as part of the project to protect children from violence. The portrait of the girl was created in 2016 by the “DOXA“ Art-group. The United Nations order has been completed for the International Children's Day.",
    longitude: 42.835254,
    latitude: 74.623682,
    image: "",
  },
  {
    name: "National Hospital",
    description:
      "“Burning yourself, always shine on others“, Doxa, July 2020. The picture was made for the Day of the Medic. The artists portrayed a doctor holding her X-ray showing pneumonia.",
    longitude: 42.865798,
    latitude: 74.596027,
    image: "",
  },
  {
    name: "Open-air graffiti gallery (Lev Tolstoy - Panfilov St.)",
    description:
      "Thus, the streets of Bishkek continue to be painted with bright colors. Often thanks to festivals like Basicolors. Dozens of street artists from near and far abroad took part in it. During the day, they painted the walls of the street with the theme “Happy Together“.",
    longitude: 42.86302,
    latitude: 74.600752,
    image: "",
  },
  {
    name: "Swimming pool of the Sports Palace - st. Ryskulova / Togoloka Moldo",
    description:
      "Another example of a graffiti gallery is the swimming pool, which was opened together with the Sports Palace in 1980. At that time, it was one of the largest swimming pools in Kyrgyzstan. In 1997, it was leased for a period of 10 years, after which it fell into disrepair and was closed." +
      "Nowadays, young people are engaged in dancing on the site of the pool, skaters have created an impromptu skate park, and graffiti artists have supplemented the atmosphere of the underground with their drawings. Among the graffiti, there are many works belonging to the spray of such a talented artist as Zhenya Chervi.",
    longitude: 42.878438,
    latitude: 74.594598,
    image: "",
  },
  {
    name: "Canal between 5 and 6 microdistricts",
    description:
      "Cherwi's work can also be seen in other parts of the city. For example, at the favorite location of street artists - dry water canal.\n" +
      "This is what he writes about his work, answering the questions “What message do your works have? What should you pay attention to? How did the idea come to you? How did you get started?“\n" +
      "«It depends on what is drawn, most often without much sense, just a game. The main criteria are location and size, and the meaning is more interesting for me to listen to people and their versions of what is drawn and why. I have been drawing for more than 15 years, and at each stage it was different things, sometimes arising from each other, sometimes something completely new. So now I have different directions in my work from simple and quick street painting to several storey full-color works, tattoos and sculptures.at the favorite location of street artists - dry water canal.»",
    longitude: 42.826951,
    latitude: 74.623436,
    image: "",
  },
];

DG.then(function () {
  map = DG.map("map", {
    center: [42.858149, 74.587722],
    zoom: 13,
  });

  for (let i in graffitiList) {
    DG.marker([graffitiList[i].longitude, graffitiList[i].latitude])
      .on("click", function () {
        image.src = `images/${i}.png`;
        name.innerHTML = graffitiList[i].name;
        description.innerHTML = graffitiList[i].description;
        full.style.display = "flex"
      })
      .addTo(map)
      .bindPopup(graffitiList[i].name);
  }
});

const openCloseBar = () => {
  bar.classList.toggle("fullBar");
  full.classList.toggle("rotated");
};
