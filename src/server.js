import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      const vans = [
        {
          id: "1",
          name: "Urban Explorer",
          price: 80,
          imageUrl:
            "https://images.pexels.com/photos/3560366/pexels-photo-3560366.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          type: "simple",
          seater: 4,
          description:
            "Perfect for solo city tours and quick weekend getaways — sleek, nimble, and easy to park.",
        },
        {
          id: "2",
          name: "Mountain Rider",
          price: 100,
          imageUrl:
            "https://images.pexels.com/photos/15049598/pexels-photo-15049598/free-photo-of-voyage-en-vanlife-sur-les-route-hors-route-aventure.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          type: "rugged",
          seater: 6,
          description:
            "Built for mountainous terrains and off-road adventures. Go anywhere, anytime with confidence.",
        },
        {
          id: "3",
          name: "Luxury Cruiser",
          price: 150,
          imageUrl:
            "https://images.pexels.com/photos/21012245/pexels-photo-21012245/free-photo-of-gray-roewe-imax8-car.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "luxury",
          seater: 7,
          description:
            "Luxury on wheels. Plush interiors, ambient lighting, and top-tier comfort for longer journeys.",
        },
        {
          id: "4",
          name: "Beach Hopper",
          price: 70,
          imageUrl:
            "https://images.pexels.com/photos/11436024/pexels-photo-11436024.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "simple",
          seater: 4,
          description:
            "Small, fun, and easy-going. Made for sunny coastlines and chilled-out beach hopping.",
        },
        {
          id: "5",
          name: "Off-Road Beast",
          price: 120,
          imageUrl:
            "https://images.pexels.com/photos/2832251/pexels-photo-2832251.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "rugged",
          seater: 5,
          description:
            "Take on rough terrains with high ground clearance, rugged tires, and unshakable build.",
        },
        {
          id: "6",
          name: "City Commuter",
          price: 65,
          imageUrl:
            "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "simple",
          seater: 3,
          description:
            "Your daily driver. Compact, fuel-efficient, and ideal for beating the urban traffic.",
        },
        {
          id: "7",
          name: "Executive Limo Van",
          price: 180,
          imageUrl:
            "https://images.pexels.com/photos/9354590/pexels-photo-9354590.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "luxury",
          seater: 8,
          description:
            "A mobile office and a hotel suite in one. Travel in pure executive style and privacy.",
        },
        {
          id: "8",
          name: "Trail Blazer",
          price: 110,
          imageUrl:
            "https://images.pexels.com/photos/16183671/pexels-photo-16183671/free-photo-of-van-tent-and-motorbike-on-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "rugged",
          seater: 6,
          description:
            "Adventure-ready with gear storage, durable suspension, and a spirit for exploring unknown paths.",
        },
        {
          id: "9",
          name: "Family Traveller",
          price: 90,
          imageUrl:
            "https://images.pexels.com/photos/29379754/pexels-photo-29379754/free-photo-of-ice-cream-truck-at-texas-city-beachfront.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "simple",
          seater: 5,
          description:
            "Roomy, safe, and comfortable — ideal for fun family vacations and group road trips.",
        },
      ];

      // GET all vans
      this.get("/vans", () => {
        return { vans };
      });

      // ✅ GET single van by ID
      this.get("/vans/:id", (schema, request) => {
        const id = request.params.id;
        const van = vans.find((v) => v.id === id);
        return { van };
      });
    },
  });
}
