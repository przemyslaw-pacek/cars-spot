import { Tile } from "../../../common/Tile";

export const Seo = () => (
    <section
        className="
            bg-[#282828]
            text-white
            grid
            grid-rows-[auto,auto]
            sm:grid-cols-[auto,auto]
            gap-[48px]
            px-[30px]
            sm:px-[60px]
            xl:px-[120px]
            py-[22px]
            sm:py-[44px]
            xl:py-[88px]"
    >
        <Tile
            title={`Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.`}
            text={`Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                    Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi,
                    ac venenatis eros ipsum ac arcu. Vestibulum et ...the rest of the text - 
                    Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                    Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi,
                    ac venenatis eros ipsum ac arcu.`}
        />
        <Tile
            title={`Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.`}
            text={`Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                    Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi,
                    ac venenatis eros ipsum ac arcu. Vestibulum et ...the rest of the text - 
                    Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                    Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi,
                    ac venenatis eros ipsum ac arcu.`}
        />
    </section>
);