import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};

        // Convert array to list
        List<Integer> list = Arrays.asList(array);

        Collections.shuffle(list);

        // Convert shuffled list back to array
        Integer[] shuffledArray = list.toArray(new Integer[0]);

        for (int value : shuffledArray) {
            System.out.print(value + " ");
        }
    }
}
