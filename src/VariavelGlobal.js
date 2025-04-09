let variavelGlobalEmail = "";

export function setVariavel(email) {
  variavelGlobalEmail = email;
}

export function getVariavelGlobal() {
  return variavelGlobalEmail;
}

/*Como Usar(Importante!):
    Importar:
        import React, { useState, useEffect } from "react";
        import { getVariavelGlobal } from "../../../VariavelGlobal";


    Consumir um State:
        const [email, setEmail] = useState("");

    Setar o Email:
          useEffect(() => {
            setEmail(getVariavelGlobal());
          }, []);

    Utilizar:
        {email}

Resumo:
Importa a variavel, consome um state para guardar informações, seta a informação dentro de email, e usa como {email}
*/