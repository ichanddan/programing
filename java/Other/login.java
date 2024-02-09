
import java.util.Scanner;

public class login {
    public static void main(String[] args) {
        
        String username = "john";  // pre-defined username
        String password = "pass";  // pre-defined password

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your username: ");
        String inputUsername = scanner.nextLine();

        System.out.print("Enter your password: ");
        String inputPassword = scanner.nextLine();

        if (inputUsername.equals(username) && inpjutPassword.equals(password)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Login failed. Please try again.");
        }
    }
}
