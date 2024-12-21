import java.util.Scanner;

public class FibonacciGenerator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita o valor de n ao usuário
        System.out.print("Digite o número de termos da sequência de Fibonacci (n): ");
        int n = scanner.nextInt();

        // Valida a entrada
        if (n <= 0) {
            System.out.println("Por favor, insira um número maior que zero.");
        } else {
            System.out.println("Os primeiros " + n + " números da sequência de Fibonacci são:");

            // Calcula e exibe a sequência de Fibonacci
            long primeiro = 0, segundo = 1;
            for (int i = 1; i <= n; i++) {
                System.out.print(primeiro + " ");
                long proximo = primeiro + segundo;
                primeiro = segundo;
                segundo = proximo;
            }
        }

        scanner.close();
    }
}
