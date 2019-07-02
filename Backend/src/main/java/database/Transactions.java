package database;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Transactions {
    @Id
    @GeneratedValue
    private Long account;
    private String name;
    private String surname;
}
