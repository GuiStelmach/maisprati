import java.util.Arrays;
import java.util.Scanner;

public class AnagramaChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita duas palavras ao usuário
        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine();

        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine();

        // Remove espaços em branco e converte para letras minúsculas
        palavra1 = palavra1.replaceAll("\\s+", "").toLowerCase();
        palavra2 = palavra2.replaceAll("\\s+", "").toLowerCase();

        // Verifica se são anagramas
        if (saoAnagramas(palavra1, palavra2)) {
            System.out.println("As palavras \"" + palavra1 + "\" e \"" + palavra2 + "\" são anagramas!");
        } else {
            System.out.println("As palavras \"" + palavra1 + "\" e \"" + palavra2 + "\" não são anagramas.");
        }

        scanner.close();
    }

    public static boolean saoAnagramas(String palavra1, String palavra2) {
        // Se os tamanhos forem diferentes, não podem ser anagramas
        if (palavra1.length() != palavra2.length()) {
            return false;
        }

        // Converte as palavras para arrays de caracteres e ordena
        char[] array1 = palavra1.toCharArray();
        char[] array2 = palavra2.toCharArray();

        Arrays.sort(array1);
        Arrays.sort(array2);

        // Compara os arrays ordenados
        return Arrays.equals(array1, array2);
    }
}
