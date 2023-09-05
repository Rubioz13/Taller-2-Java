Scanner scanner = new Scanner(System.in);
int tiempoTotalMinutos = 0;

while (true) {
    System.out.print("Ingresa el tiempo de viaje del tramo (en minutos), o 0 para terminar: ");
    int tiempoTramo = scanner.nextInt();

    if (tiempoTramo == 0) {
        break;
    }

    tiempoTotalMinutos += tiempoTramo;
}

int horas = tiempoTotalMinutos / 60;
int minutos = tiempoTotalMinutos % 60;

System.out.println("El tiempo total de viaje es: " + horas + " horas " + minutos + " minutos");
scanner.close();
}
}