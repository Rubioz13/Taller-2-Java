import java.util.Scanner;
public class Punto3 {
    public static void Punto3(String[] args) {
Scanner scanner = new Scanner(System.in);
int valoresPositivos = 0;
int valoresNegativos = 0;
System.out.println("Ingresa valores enteros (ingresa 0 para terminar):");
while (true) {
    int valor = scanner.nextInt();
    if (valor == 0) {
        break;
    } else if (valor > 0) {
        valoresPositivos++;
    } else {
        valoresNegativos++;
    }
}
System.out.println("Grafico de valores ingresados:");
System.out.print("Valores positivos: ");
for (int i = 0; i < valoresPositivos; i++) {
    System.out.print("*");
}
System.out.println();
System.out.print("Valores negativos: ");
for (int i = 0; i < valoresNegativos; i++) {
    System.out.print("*");
}
scanner.close();
}
}