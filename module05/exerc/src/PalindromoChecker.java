import java.util.Scanner;

public class PalindromoChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita uma palavra ao usuário
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();

        // Converte a palavra para letras minúsculas e remove espaços
        palavra = palavra.toLowerCase().replaceAll("\\s+", "");

        // Verifica se a palavra é um palíndromo
        boolean isPalindromo = true;
        int comprimento = palavra.length();

        for (int i = 0; i < comprimento / 2; i++) {
            if (palavra.charAt(i) != palavra.charAt(comprimento - 1 - i)) {
                isPalindromo = false;
                break;
            }
        }

        // Exibe o resultado
        if (isPalindromo) {
            System.out.println("A palavra \"" + palavra + "\" é um palíndromo!");
        } else {
            System.out.println("A palavra \"" + palavra + "\" não é um palíndromo.");
        }

        scanner.close();
    }
}
