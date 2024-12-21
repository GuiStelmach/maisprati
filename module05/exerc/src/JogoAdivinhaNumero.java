import java.util.Scanner;
import java.util.Random;

public class JogoAdivinhaNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // Gera um número aleatório entre 1 e 50
        int numeroSecreto = random.nextInt(50) + 1;

        System.out.println("Bem-vindo ao jogo de adivinhação!");
        System.out.println("Tente adivinhar o número entre 1 e 50.");

        int palpite = 0; // Inicializa o palpite do usuário

        // Continua até o usuário acertar
        while (palpite != numeroSecreto) {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();

            if (palpite == numeroSecreto) {
                System.out.println("Parabéns! Você adivinhou o número " + numeroSecreto + "!");
            } else {
                System.out.println("Errado! Tente novamente.");
            }
        }

        scanner.close();
    }
}
