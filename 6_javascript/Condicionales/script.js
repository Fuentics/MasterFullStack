function ejecutarCodigo(opcion) {
  switch (opcion) {
    case "option1":
      let respuestaE1 = prompt("¿Eres bellísimo/a?");
      if (respuestaE1 === "si" || respuestaE1 === "SI" || respuestaE1 === "Si") {
        alert("Ciertamente");
      } else if (respuestaE1 === "no" || respuestaE1 === "NO" || respuestaE1 === "No") {
        alert("No te creo");
      }
      break;
    case "option2":
      let numeroE2 = prompt("Ingrese un número");
      let resultadoE2 = numeroE2 % 2;
      if (resultadoE2 === 0) {
        alert(`${numeroE2} es divisible entre dos`);
      } else {
        alert(`${numeroE2} NO es divisible entre dos`);
      }
      break;
    case "option3":
      let numeroE3 = prompt("Ingrese un número");
      let resultadoE3 = numeroE3 % 2;
      if (resultadoE3 === 0) {
        alert(`${numeroE3} es divisible entre dos`);
      } else {
        alert(`${numeroE3} NO es divisible entre dos`);
      }
      break;
    case "option4":
      let numCliente = prompt("Ingrese número de cliente");
      if (numCliente === "1000") {
        alert("Ganaste Premio");
      } else {
        alert("Lo sentimos sigue participando");
      }
      break;
    case "option5":
      let num1_E5 = prompt("Ingrese primer número:");
      let num2_E5 = prompt("Ingrese segundo número:");
      if (num1_E5 < num2_E5) {
        alert(`${num1_E5} es MENOR que ${num2_E5}`);
      } else if (num2_E5 < num1_E5) {
        alert(`${num2_E5} es MENOR que ${num1_E5}`);
      } else {
        alert(`${num1_E5} es IGUAL que ${num2_E5}`);
      }
      break;
    case "option6":
      let num1_E6 = prompt("Ingrese primer número:");
      let num2_E6 = prompt("Ingrese segundo número:");
      let num3_E6 = prompt("Ingrese tercer número:");
      if (num1_E6 > num2_E6 && num1_E6 > num3_E6) {
        alert(`Primer número (${num1_E6}) es MAYOR que Segundo número (${num2_E6}) y que Tercer número (${num3_E6})`);
        if (num1_E6 === num2_E6) {
          alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
        } else if (num1_E6 === num3_E6) {
          alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
        } else if (num2_E6 === num3_E6) {
          alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
        }
      } else if (num2_E6 > num1_E6 && num2_E6 > num3_E6) {
        alert(`Segundo número (${num2_E6}) es MAYOR que Primer número (${num1_E6}) y que Tercer número (${num3_E6})`);
        if (num1_E6 === num2_E6) {
          alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
        } else if (num1_E6 === num3_E6) {
          alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
        } else if (num2_E6 === num3_E6) {
          alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
        }
      } else if (num3_E6 > num1_E6 && num3_E6 > num2_E6) {
        alert(`Tercer número (${num3_E6}) es MAYOR que Primer número (${num1_E6}) y que Segundo número (${num2_E6})`);
        if (num1_E6 === num2_E6) {
          alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
        } else if (num1_E6 === num3_E6) {
          alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
        } else if (num2_E6 === num3_E6) {
          alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
        }
      }
      if (num1_E6 === num2_E6) {
        alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
      } else if (num1_E6 === num3_E6) {
        alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
      } else if (num2_E6 === num3_E6) {
        alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
      }
      break;
    case "option7":
      let day = prompt("Ingrese un día de la semana entre LUNES, VIERNES, SÁBADO O DOMINGO");
      if (day.toLowerCase() === "lunes" || day.toLowerCase() === "viernes" || day.toLowerCase() === "sábado" || day.toLowerCase() === "domingo") {
        alert(`¡¡¡ CORRECTO !!! El día ingresado es ${day}`);
      } else {
        alert(`¡¡¡ ERROR !!! Ejecute nuevamente y coloque el día solicitado (LUNES, VIERNES, SÁBADO O DOMINGO))`);
      }
      break;
    // case "option8":
    //   let cal = prompt("Ingrese calificación entre 1 y 10");
    // break;
    case "option9":
      let ice = 50;
      let topping = prompt("El helado sin topping cuesta 50 MXN.\n¿Qué topping desea? (Oreo, Kitkat o Brownie)");
      if (topping.toLowerCase() === "oreo") {
        ice += 10;
        alert(`El helado con topping de Oreo cuesta:\n$${ice} MXN`);
      } else if (topping.toLowerCase() === "kitkat") {
        ice += 15;
        alert(`El helado con topping de Kitkat cuesta:\n$${ice} MXN`);
      } else if (topping.toLowerCase() === "brownie") {
        ice += 20;
        alert(`El helado con topping de Brownie cuesta:\n$${ice} MXN`);
      } else {
        alert("No tenemos este topping, lo sentimos");
        alert(`El precio del helado sin topping es de $${ice} MXN`);
      }
      break;
    case "option10":
      let valorCourse = 4999, valorCarrera = 3999, valorMaster = 2999;
      let duraCourse = 2, duraCarrera = 6, duraMaster = 12;

      programa = prompt("BIENVENIDO A LEARNING DEV\nOfrecemos diferentes programas educativos:\n\n¿Qué programa eliges?\n1. COURSE (Duración: 2 meses. Costo mensual: $4.999)\n2. CARRERA (Duración: 6 meses. Costo mensual: $3.999)\n3. MASTER (Duración: 12 meses. Costo mensual: $2.999)");

      beca = prompt("¿Cuentas con alguna de las siguientes becas?\n1. Beca Facebook: 20%\n2. Beca Google: 15%\n3. Beca Jesua: 50%?");
      let valorBeca = 0;
      if (beca == 1) {
        valorBeca = 20;
      } else if (beca == 2) {
        valorBeca = 15;
      } else if (beca == 3) {
        valorBeca = 50;
      }
      if (programa == 1 && beca == 1 || programa == 1 && beca == 2 || programa == 1 && beca == 3) {
        valorCourse = (valorCourse - (valorCourse * valorBeca / 100));
        totalCourse = valorCourse * duraCourse;
        alert(`El valor MENSUAL de COURSE con el descuento del ${valorBeca}% es: $${valorCourse}`);
        alert(`El valor TOTAL de COURSE con una duración de 2 meses es: $${totalCourse}`);
      } else if (programa == 2 && beca == 1 || programa == 2 && beca == 2 || programa == 2 && beca == 3) {
        valorCarrera = (valorCarrera - (valorCarrera * valorBeca / 100));
        totalCarrera = valorCarrera * duraCarrera;
        alert(`El valor mensual de CARRERA con el descuento del ${valorBeca}% es: $${valorCarrera}`);
        alert(`El valor TOTAL de CARRERA con una duración de 6 meses es: $${totalCarrera}`);
      } else if (programa == 3 && beca == 1 || programa == 3 && beca == 2 || programa == 3 && beca == 3) {
        valorMaster = (valorMaster - (valorMaster * valorBeca / 100));
        totalMaster = valorMaster * duraMaster;
        alert(`El valor mensual de MASTER con el descuento del ${valorBeca}% es: $${valorMaster}`);
        alert(`El valor TOTAL de MASTER con una duración de 12 meses es: $${totalMaster}`);
      } else {
        alert("Ingrese las opciones correctas (1, 2 o 3)");
      }
      break;
    case "option11":
      let tipo_de_vehiculo = prompt("INGRESE TIPO DE VEHÍCULO:\n1. Coche\n2. Moto\n3. Autobús");
      let precioLitro = 0;

      if (tipo_de_vehiculo == 1) {
        precioLitro = 0.20;
      } else if (tipo_de_vehiculo == 2) {
        precioLitro = 0.10;
      } else if (tipo_de_vehiculo == 3) {
        precioLitro = 0.5;
      }

      let kms_recorridos = prompt("¿Cuántos kilometros recorrió?");
      let litros_consumidos = prompt("Cuántos litros de gasolina consumió");

      let extra = 0;
      if (litros_consumidos > 0 && litros_consumidos < 100) {
        extra += 5;
      } else if (litros_consumidos > 100) {
        extra += 10;
      }

      let total_a_pagar = 0;
      if (tipo_de_vehiculo == 1 || tipo_de_vehiculo == 2 || tipo_de_vehiculo == 3) {
        total_a_pagar = (precioLitro * kms_recorridos) + extra;
        alert(`El total a pagar es ${total_a_pagar}`);
      } else {
        alert("Ingrese las opciones correctas (1, 2 o 3)");
      }
      break;
    default:
      console.log("Opción inválida");
  }
}