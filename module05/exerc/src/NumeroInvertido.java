import java.util.Scanner;

public class NumeroInvertido {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita um número inteiro ao usuário
        System.out.print("Digite um número inteiro: ");
        int numero = scanner.nextInt();

        // Inicializa a variável para armazenar o número invertido
        int numeroInvertido = 0;

        // Inverte o número
        while (numero != 0) {
            int digito = numero % 10;       // Obtém o último dígito
            numeroInvertido = numeroInvertido * 10 + digito; // Constrói o número invertido
            numero /= 10;                  // Remove o último dígito
        }

        // Exibe o número invertido
        System.out.println("O número invertido é: " + numeroInvertido);

        scanner.close();
    }
}
