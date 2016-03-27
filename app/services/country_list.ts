export class CountryListService {
    countries: any[] = [{
        name: 'Spain',
        jumps: '900',
    },
        {
            name: 'Germany',
            jumps: '800',
        },
        {
            name: 'France',
            jumps: '700',
        },
        {
            name: 'England',
            jumps: '600',
        }
    ];

    add(value: any): void {
        this.countries.push(value);
    }

    all(): any[] {
        return this.countries;
    }
}
