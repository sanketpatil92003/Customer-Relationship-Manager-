@Controller
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String addCustomer(@ModelAttribute Customer customer) {
        customerService.saveCustomer(customer);
        return "redirect:/customer/list";
    }

    @GetMapping("/list")
    public String listCustomers(Model model) {
        List<Customer> customers = customerService.getAllCustomers();
        model.addAttribute("customers", customers);
        return "customerList";
    }

    @GetMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return "redirect:/customer/list";
    }
}
