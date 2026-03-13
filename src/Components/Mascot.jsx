// import robot from "../assets/robot.png";

// const Mascot = () => {
//   return (
//     <div className="fixed bottom-40 right-50 z-50">
//       <img
//         src={robot}
//         alt="AI Robot"
//         className="w-38 h-27 animate-bounce  robot-glow"
//       />
//     </div>
//   );
// };

// export default Mascot;

import robot from "../assets/PIC_101.gif";
import { motion } from "framer-motion";

const positions = {
  hero: { top: "65%", right: "10%" },//com--bashi
  about: { top: "45%", right: "55%" },
  education: { top: "55%", right: "65%" },
  skills: { top: "55%", right: "25%" },
  projects: { top: "65%", right: "55%" },
  contact: { top: "78%", right: "8%" },
};

const Mascot = ({ activeSection = "hero" }) => {
  return (
    <motion.div
      className="fixed z-50"
      animate={positions[activeSection]}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <img
        src={robot}
        alt="AI Robot"
             className=" bottom-20 right-40 w-24 mascot"    />
    </motion.div>
  );
};

export default Mascot;

// import minion from "../assets/PIC_101.gif";

// const Mascot = () => {
//   return (
//     <img
//       src={minion}
//       alt="Mascot"
//       //className="fixed bottom-10 right-10 w-24 z-50 pointer-events-none"
//       className="fixed bottom-20 right-40 w-24 mascot"
//     />
//   );
// };

// export default Mascot;