import java.util.Scanner;

public class ContadorDePalavras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita a frase ao usuário
        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();

        // Remove espaços extras e divide a frase em palavras
        String[] palavras = frase.trim().split("\\s+");

        // Conta as palavras
        int numeroDePalavras = palavras.length;

        // Exibe o número de palavras
        System.out.println("A frase contém " + numeroDePalavras + " palavras.");

        scanner.close();
    }
}
