import React, { useMemo } from "react";
import davidOpio from "../../../../assets/images/team/david_opio.png";
import sumayyahSengendo from "../../../../assets/images/team/sumayyah_sengendo.png";
import mariaNatukunda from "../../../../assets/images/team/maria_natukunda.png";
import najjaSendege from "../../../../assets/images/team/najja_sendege.png";
import justusArineitwe from "../../../../assets/images/team/justus_arineitwe.png";
import musaKisiriko from "../../../../assets/images/team/musa_kisiriko.png";
import mercyLakisa from "../../../../assets/images/team/mercy_lakisa.png";
import denisKibukamusoke from "../../../../assets/images/team/denis_kibukamusoke.png";
import simonOdongoi from "../../../../assets/images/team/simon_odongoi.png";

const TeamSection1 = ({ className }: { className?: string }) => {
  const executiveTeam = useMemo(() => {
    const team: { name: string; role: string; image: any }[] = [
      { name: "David Opio", role: "Executive Director", image: davidOpio },

      {
        name: "Sumayyah N. Sengendo",
        role: "Managing Director",
        image: sumayyahSengendo,
      },
      {
        name: "Maria Natukunda",
        role: "Chief Operations Officer",
        image: mariaNatukunda,
      },
      {
        name: "Najja N. Sendege",
        role: "Chief Technology Officer",
        image: najjaSendege,
      },
      {
        name: "Justus Arineitwe",
        role: "Chief Finance Officer",
        image: justusArineitwe,
      },

      {
        name: "Musa Kisiriko",
        role: "Chief of Business Development",
        image: musaKisiriko,
      },
      {
        name: "Mercy Lakisa",
        role: "Chief of Customer Care",
        image: mercyLakisa,
      },
     
      {
        name: "Denis Kibukamusoke",
        role: "Chief of Marketing",
        image: denisKibukamusoke,
      },
     
      {
        name: "Simon Odongoi",
        role: "Chief Legal Officer",
        image: simonOdongoi,
      },
    ];
    return team;
  }, []);
  return (
    <section
      style={{ minHeight: "40vh" }}
      className={
        "relative bg-white mx-auto px-40 flex flex-col  pt-10 items-start md:px-10   py-8 pb-16" +
        (className ? className : "")
      }
    >
      <p className='text-green-800 font-thin text-3xl text-center mb-10 md:text-2xl'>
        gnuGrid CRB’s Executive Committee provides the overall company’s
        direction and acts on behalf of the Board of Directors. They are
        responsible for overseeing the daily implementation of Board policies
        and the CRB’s strategic direction.
      </p>

      {/* <div className='w-full columns-3 gap-8 lg:columns-2 md:columns-6xl '> */}
      <div className='w-full flex flex-wrap justify-center'>
        {executiveTeam.map((team, i) => {
          return (
            <div key={i + "oo"} className='mb-4 flex flex-col items-center mx-5'>
              <img src={team.image} alt='' className='bg-gray-100 h-44' />
              <p className='text-lg text-green-900 font-bold'>{team.name}</p>
              <p className='text-sm'>{team.role}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection1;
