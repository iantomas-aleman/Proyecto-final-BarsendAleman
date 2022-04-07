


function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    

    // Same response based on capitalization
    if (input == "Tengo un problema eléctrico") {
        return "¡Estamos aquí para ayudarte!. ¿Cuentas con un comprobador de tensión? (Puede ser un buscapolo, voltímetro, o un detector de tensión sin contacto) Responde: SI o NO.";
    } 
    if (input == "TENGO UN PROBLEMA ELÉCTRICO") {
        return "¡Estamos aquí para ayudarte!. ¿Cuentas con un comprobador de tensión? (Puede ser un buscapolo, voltímetro, o un detector de tensión sin contacto) Responde: SI o NO.";
    } 
    if (input == "tengo un problema eléctrico") {
        return "¡Estamos aquí para ayudarte!. ¿Cuentas con un comprobador de tensión? (Puede ser un buscapolo, voltímetro, o un detector de tensión sin contacto) Responde: SI o NO.";
    } 
    if (input == "tengo un problema electrico") {
        return "¡Estamos aquí para ayudarte!. ¿Cuentas con un comprobador de tensión? (Puede ser un buscapolo, voltímetro, o un detector de tensión sin contacto) Responde: SI o NO.";
    } 
    if (input == "Tengo un problema electrico") {
        return "¡Estamos aquí para ayudarte!. ¿Cuentas con un comprobador de tensión? (Puede ser un buscapolo, voltímetro, o un detector de tensión sin contacto) Responde: SI o NO.";
    } 
    if (input == "TENGO UN PROBLEMA ELECTRICO") {
        return "¡Estamos aquí para ayudarte!. ¿Cuentas con un comprobador de tensión? (Puede ser un buscapolo, voltímetro, o un detector de tensión sin contacto) Responde: SI o NO.";
    } 
    
    
    // Same response based on capitalization
    if (input == "Trifasico") {
        return "¿Cuantas fases te faltan? (Responder en forma numérica)";
    }
    if (input == "trifasico") {
        return "¿Cuantas fases te faltan? (Responder en forma numérica)";
    }
    if (input == "TRIFASICO") {
        return "¿Cuantas fases te faltan? Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. (Responder en forma numérica)";
    }
    
    //
    // fases (trifasico) responses

    if (input == "1") {
        return "1) Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. ¿Tenes las 3 fases en entrada? - 2) Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. ¿Tenes las 3 fases en entrada? - 3) Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. ¿Tenes las 3 fases en entrada?";
    }
    if (input == "una") {
        return "1) Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. ¿Tenes las 3 fases en entrada? - 2) Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. ¿Tenes las 3 fases en entrada? - 3) Revisar con un busca polo la entrada y salida de las fases en la termica tripolar o tetrapolar del tablero general. ¿Tenes las 3 fases en entrada?";
    }
    //
    //
    
     // Same response based on capitalization
     if (input == "si") {
        return "¡Continuemos!. Dirigete hacia el tablero principal (el más próximo al medidor) y verifica si hay tensión en las borneras de entrada y salida de la primer llave térmica. (DATO IMPORTANTE: Recuerda que en una instalación monofásica debe haber tensión en un solo bornes, ya que por uno circula la FASE y por el otro el NEUTRO). |Si la bornera de ENTRADA no tiene fase, tendrás que llamar a tu empresa distribuidora de energía eléctrica. |Si entre las dos borneras de entrada no hay diferencia de potencial (No hay neutro) tendrás que llamar a tu empresa distribuidora de energía eléctrica.";
    }
    
     if (input == "SI") {
        return "¡Continuemos!. Dirigete hacia el tablero principal (el más próximo al medidor) y verifica si hay tensión en las borneras de entrada y salida de la primer llave térmica. (DATO IMPORTANTE: Recuerda que en una instalación monofásica debe haber tensión en un solo bornes, ya que por uno circula la FASE y por el otro el NEUTRO). |Si la bornera de ENTRADA no tiene fase, tendrás que llamar a tu empresa distribuidora de energía eléctrica. |Si entre las dos borneras de entrada no hay diferencia de potencial (No hay neutro) tendrás que llamar a tu empresa distribuidora de energía eléctrica.";
    }

     if (input == "Si") {
        return "¡Continuemos!. Dirigete hacia el tablero principal (el más próximo al medidor) y verifica si hay tensión en las borneras de entrada y salida de la primer llave térmica. (DATO IMPORTANTE: Recuerda que en una instalación monofásica debe haber tensión en un solo bornes, ya que por uno circula la FASE y por el otro el NEUTRO). |Si la bornera de ENTRADA no tiene fase, tendrás que llamar a tu empresa distribuidora de energía eléctrica. |Si entre las dos borneras de entrada no hay diferencia de potencial (No hay neutro) tendrás que llamar a tu empresa distribuidora de energía eléctrica.";
    }

    //            ¡¡¡ CONTINUAR !!!               //

    // Same response based on capitalization
    if (input == "monofasico") {
        return "Revisa la termica general. (Se encuentra detras del medidor mayormente) ¿Esta abierta?";
    }
    if (input == "Monofasico") {
        return "Revisa la termica general. (Se encuentra detras del medidor mayormente) ¿Esta abierta?";
    }
    if (input == "MONOFASICO") {
        return "Revisa la termica general. (Se encuentra detras del medidor mayormente) ¿Esta abierta?";
    }

    // Same response based on capitalization 

    if (input == "Si")  {
        return "Pasemos a revisar el tablero principal (Se encuentra cerca de la puerta de entrada de tu domicilio mayormente)";
    }
    if (input == "si")  {
        return "Pasemos a revisar el tablero principal (Se encuentra cerca de la puerta de entrada de tu domicilio mayormente)";
    }
    if (input == "SI")  {
        return "Pasemos a revisar el tablero principal (Se encuentra cerca de la puerta de entrada de tu domicilio mayormente)";
    }
    //

    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return (location.assign = '<a href="http://infobae.com" target="_blank">Si necesita ayuda urgente, haga click aqui y ponganse en contacto con nosotros</a>');
    }
}