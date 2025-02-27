
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
const FadeIn = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
        <>
            {mounted && (

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 300 ,
                        scale: 0.9
                    }}
                    whileInView={{ 
                        opacity: 1, 
                        y: 0 ,
                        scale: 1
                    }}
                    viewport={{ once: false, amount: 0.9 }} // Anima apenas quando entra na tela
                    transition={{ duration: 0.8, ease: 'easeInOut'}}
                >
                    {children}
                </motion.div>

            )}
        </>
    )
}

export default FadeIn