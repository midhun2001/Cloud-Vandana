import java.util.HashSet;
import java.util.Scanner;

public class Pangram {
    static void checkPangram(String s){
        // Revome whitespace and covert into lowercase
        s = s.replace(" ", "").toLowerCase();

        // Convert into char array
        char[] ch = s.toCharArray();

        //Creating Hash Set to store unique values
        HashSet<Character> letters = new HashSet<Character>();

        //Adding all alphabets to Hash Set
        for (char c: ch) {
            if (Character.isLetter(c)) {
                letters.add(c);
            }
        }

        if (letters.size() == 26) {
            System.out.println("It is a pangram");
        } else {
            System.out.println("It is not a pangram");
        }
    }

    public static void main(String[] args) {
        System.out.println("Enter the string: ");
        try (Scanner sc = new Scanner(System.in)) {
            String str = sc.nextLine();
            checkPangram(str);
        }
    }
}