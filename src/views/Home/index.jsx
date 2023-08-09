import Layout from "../../components/common/Layout.jsx"

import data from "./data.json"
import Card from "./components/Card"

const HomeView = () => {
  const cards = data.cards

  return (
    <Layout>
      <div className={"grid md:grid-cols-2 max-w-6xl mx-auto gap-5"}>
        {
          cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                subtitle={card.subtitle}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default HomeView