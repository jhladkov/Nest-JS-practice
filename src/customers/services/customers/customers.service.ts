import {Injectable} from '@nestjs/common';
import {CreateCustomerDto} from "../../dtos/CreateCustomer.dto";
import {Customer} from "../../types/Customer";

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'zhenua.gladkovv@gmail.com',
            name: 'James Gladkov',
        },
        {
            id: 2,
            email: 'serhii.gladkovv@gmail.com',
            name: 'Julios Novocrono',
        },
        {
            id: 3,
            email: 'julia.gladkovv@gmail.com',
            name: 'Yami Sukihiro',
        },
    ]

    findCustomerById(id: number) {
        return this.customers.find(user => user.id === id)
    }
    getCustomers() {
        return this.customers
    }
    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto)
    }

}
