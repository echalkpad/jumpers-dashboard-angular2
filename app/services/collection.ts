export class CollectionListService {
    collectionItems: any[];

    set(items): void {
        this.collectionItems = items;
    }
    add(value: any): void {
        this.collectionItems.push(value);
    }

    all(): any[] {
        return this.collectionItems;
    }
}
