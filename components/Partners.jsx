import Image from "next/image";
import { partners } from "@/data/data";
const Partners = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-20">
          <h1>Our Tour Partner</h1>
          <p className="description">
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br />
            but the majority have suffered alteration.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-full sm:w-1/2 lg:w-1/4 p-4"
            >
              <Image
                src={partner.logo}
                alt="partner"
                width={206}
                height={28}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
