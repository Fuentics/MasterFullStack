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
      if (num1_E5 < num2_E5){
        alert(`${num1_E5} es MENOR que ${num2_E5}`);
      } else if (num2_E5 < num1_E5){
        alert(`${num2_E5} es MENOR que ${num1_E5}`);
      } else {
        alert(`${num1_E5} es IGUAL que ${num2_E5}`);
      }
      break;
      case "option6":
        let num1_E6 = prompt("Ingrese primer número:"); 
        let num2_E6 = prompt("Ingrese segundo número:");
        let num3_E6 = prompt("Ingrese tercer número:");
        if (num1_E6 > num2_E6 && num1_E6 > num3_E6){
          alert(`Primer número (${num1_E6}) es MAYOR que Segundo número (${num2_E6}) y que Tercer número (${num3_E6})`);
          if (num1_E6 === num2_E6){
            alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
          } else if (num1_E6 === num3_E6){
            alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
          }  else if (num2_E6 === num3_E6){
            alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
          }
        } else if (num2_E6 > num1_E6 && num2_E6 > num3_E6){
          alert(`Segundo número (${num2_E6}) es MAYOR que Primer número (${num1_E6}) y que Tercer número (${num3_E6})`);
          if (num1_E6 === num2_E6){
            alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
          } else if (num1_E6 === num3_E6){
            alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
          }  else if (num2_E6 === num3_E6){
            alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
          }
        } else if (num3_E6 > num1_E6 && num3_E6 > num2_E6){
          alert(`Tercer número (${num3_E6}) es MAYOR que Primer número (${num1_E6}) y que Segundo número (${num2_E6})`);
          if (num1_E6 === num2_E6){
            alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
          } else if (num1_E6 === num3_E6){
            alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
          }  else if (num2_E6 === num3_E6){
            alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
          }
        }
        if (num1_E6 === num2_E6){
          alert(`Primer número (${num1_E6}) es IGUAL que Segundo número (${num2_E6})`);
        } else if (num1_E6 === num3_E6){
          alert(`Primer número (${num1_E6}) es IGUAL que Tercer número (${num3_E6})`);
        }  else if (num2_E6 === num3_E6){
          alert(`Segundo número (${num2_E6}) es IGUAL que Tercer número (${num3_E6})`);
        }
      break;
      case "option7":
        let day = prompt("Ingrese un día de la semana entre LUNES, VIERNES, SÁBADO O DOMINGO");
        if (day.toLowerCase() === "lunes" || day.toLowerCase() === "viernes" || day.toLowerCase() === "sábado" || day.toLowerCase() === "domingo"){
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
        if (topping.toLowerCase() === "oreo"){
          ice += 10;
          alert(`El helado con topping de Oreo cuesta:\n$${ice} MXN`);
        } else if (topping.toLowerCase() === "kitkat" ){
          ice += 15;
          alert(`El helado con topping de Kitkat cuesta:\n$${ice} MXN`);
        } else if (topping.toLowerCase() === "brownie" ){
          ice += 20;
          alert(`El helado con topping de Brownie cuesta:\n$${ice} MXN`);
        } else {
          alert("No tenemos este topping, lo sentimos");
          alert(`El precio del helado sin topping es de $${ice} MXN`);
        }
      break;
      case "option10":
        alert("BIENVENIDO A LEARNING DEV\nOfrecemos los siguientes programas educativos:\n* Course: $4.999 MXN\n* Carrera: $3.999 MXN\n* Master: $2.999 MXN");  
        let course = 4999, carrera = 3999, master = 2999;
        let becaFacebook = 20, becaGoogle = 15, becaJesua = 50;
        let duraCourse = 2, duraCarrera = 6, duraMaster = 12;
        
        
        
      
      break;
    default:
      console.log("Opción inválida");
  }
}