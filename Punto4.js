import java.util.Random;
import java.util.Scanner;
public class Punto4 {
    public static void Punto4(String[] args) {
    Random random = new Random();
    int numero_intentos = 1;
    int numero_min = 0;
    int numero_max = 100;
    int cualquiera = random.nextInt(101);
    System.out.println("adivina el numero en el que estoy pensando " + numero_min + " al " + numero_max);
    while (numero_intentos < 10) {
    System.out.println("ingresa un numero cualquiera tienes, 10 oportunidades para adivinar");
    int numeros = Integer.parseInt(System.console().readLine());
    numeros = numeros + 1;
    if (numeros < cualquiera) {
    System.out.println("tu numero es muy bajo, escribe un numero mayor");
} else if (numeros > cualquiera) {
    System.out.println("tu numero es muy alto, escribe un numero menor");
} else {
    System.out.println(" acertaste el numero, FELICITACIONES!!! " + " numero de intentos jugados: " + numero_intentos);
    break;
}
numero_intentos += 1;
}
if (numero_intentos >= 10) {
    System.out.println(" FIN DEL JUEGO! AGOTASTE TUS INTENTOS " + " numero de intentos jugados: " + numero_intentos);
}
}
}
