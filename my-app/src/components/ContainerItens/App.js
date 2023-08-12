import React from "react";

import { ContainerItens as Container} from "./style";


function ContainerItens({children, isBlu}){

    return <Container isBlu={isBlu}>{children}</Container>
}

export default ContainerItens