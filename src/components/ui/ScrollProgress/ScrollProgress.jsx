import { motion as Motion } from 'motion/react'
import './ScrollProgress.scss'
export const ScrollProgress = ({ progress }) => <Motion.div className="progress" style={{ scaleX: progress }} />
