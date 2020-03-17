import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components/native";

export default styled(LinearGradient).attrs({
  colors: ["#262626", "#0D0D0D"],
  start: [0.9, 0.1],
  end: [0.6, 0.9]
})`
  flex: 1;
`;
