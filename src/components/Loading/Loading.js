import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export default function Loading() {
    return (
        <Dimmer active inverted>
            <Loader inverted size="massive" inline='centered' >Cargando...</Loader>
        </Dimmer>
    )
}
