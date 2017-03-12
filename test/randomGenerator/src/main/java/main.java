import com.github.javafaker.Faker;
import jdk.nashorn.internal.ir.annotations.Ignore;

import java.util.ArrayList;
import java.util.Random;


/**
 * Created by Pentcho on 3/12/2017.
 */
public class main {

    public static void main(String[] args) {
        ArrayList<String> rows = rows();
        for (String row : rows) {
            System.out.println(row);
        }
    }

    @Ignore
    public static ArrayList<String> rows () {
        ArrayList<String> rows = new ArrayList<String>();
        for (int i = 0; i < 10000; i++) {
            String row = "";
            row += "<tr class=\"row\" id=\"row" + i + "\">\n";

            Random rand = new Random();
            int id = rand.nextInt(999999999) + 1;
            row += "<td name=\"sid\" class=\"valid\">" + id +" </td>\n";

            Faker faker = new Faker();
            String firstName = faker.name().firstName();
            String lastName = faker.name().lastName();
            row += "<td name=\"ln\" class=\"valid\">" + firstName +"</td>\n";
            row += "<td name=\"fn\" class=\"valid\">" + lastName + "</td>\n";

            int grade = rand.nextInt(100) + 1;
            row += "<td name=\"grade\" class=\"valid\">" + grade + "</td>\n";

            row += "<td name=\"adjustedGrade\"></td>\n";
            row += "<td class=\"clearCell\"><a href=\"#\"><img src=\"./imgs/clear.png\" onclick=\"clearRow('row0')\" /></a></td>\n";
            row += "<td class=\"clearCell\"><a href=\"#\"><img src=\"./imgs/minus.png\" onclick=\"deleteRow('row0')\" /></a></td>\n";

            row += "</tr>";

            rows.add(row);
        }

        return rows;
    }


}
