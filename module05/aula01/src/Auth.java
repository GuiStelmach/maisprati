import java.util.Scanner;

public class Auth {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String userSaved = "Gui";
        String passwordSaved = "teste";

        int attempts = 0;
        boolean authenticated = false;

        while (attempts < 3) {
            System.out.println("Insira o nome de usuário: ");
            String user = scan.nextLine();
            System.out.println("Insira a senha de usuário: ");
            String password = scan.nextLine();

            // Verifica credenciais
            if (user.equals(userSaved) && password.equals(passwordSaved)) {
                System.out.println("Acesso realizado! Bem-vindo, " + user + ".");
                authenticated = true;
                break;
            } else {
                attempts++;
                System.out.println("Dados inválidos! Tentativas restantes: " + (3 - attempts));
            }
        }

        if (!authenticated) {
            System.out.println("Número máximo de tentativas alcançado. Acesso bloqueado.");
        }

        scan.close();
    }
}
