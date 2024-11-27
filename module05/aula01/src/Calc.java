import java.util.Scanner;

public class Calc {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Escolha o tipo de cálculo: + , - , * ou / ");
        char operator = scan.next().charAt(0); // Lê o operador como caractere

        System.out.println("Digite um número: ");
        int firstNumber = scan.nextInt();
        System.out.println("Digite outro número: ");
        int secondNumber = scan.nextInt();

        double result;

        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                System.out.println("Resultado: " + result);
                break;
            case '-':
                result = firstNumber - secondNumber;
                System.out.println("Resultado: " + result);
                break;
            case '*':
                result = firstNumber * secondNumber;
                System.out.println("Resultado: " + result);
                break;
            case '/':
                if (secondNumber != 0) {
                    result = (double) firstNumber / secondNumber; // Conversão para resultado decimal
                    System.out.println("Resultado: " + result);
                } else {
                    System.out.println("Erro: Divisão por zero não é permitida.");
                }
                break;
            default:
                System.out.println("Operador inválido! Por favor, escolha entre +, -, * ou /.");
        }

        scan.close();
    }
}
