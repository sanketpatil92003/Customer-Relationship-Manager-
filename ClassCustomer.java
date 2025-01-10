@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phone;

    // getters and setters
}

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
