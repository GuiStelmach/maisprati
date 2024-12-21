import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Qual é o seu nome? ");
        String nome = scan.nextLine();

        System.out.println("Olá, " + nome + "! Seja bem-vindo.");
    }

}

