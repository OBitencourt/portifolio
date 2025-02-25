
import { motion } from "framer-motion"

const FadeIn = ({ children }) => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Anima apenas quando entra na tela
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default FadeIn