import { useMediaQuery } from "react-responsive"

export default function UseIsMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" })

  return isMobile
}
