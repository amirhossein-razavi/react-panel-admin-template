export const id = (props: any) => {
    const path = props.split("/")

    if (props) {
        switch (path[path.length - 1]) {

            case "users":
                return ['1.1', '']

            default:
                return ['', ''];
        }
    }
}