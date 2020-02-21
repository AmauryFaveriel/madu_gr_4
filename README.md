## Madu [![CircleCI](https://circleci.com/gh/ayshiff/madu_gr_4/tree/develop.svg?style=svg)](https://circleci.com/gh/ayshiff/madu_gr_4/tree/develop)

## Groupe:

- Christophe Charlebois: Front-end
- Remi Doreau: Front-end
- Enzo Hespel: Front-end
- Alice Fabre: UX/UI
- Clara de Langenhagen: UX/UI
- Corentin Croizat: Back-end
- Amaury Faveriel: Infrastructure

## Client [![Coverage Status](https://coveralls.io/repos/github/ayshiff/madu_gr_4/badge.svg?branch=develop)](https://coveralls.io/github/ayshiff/madu_gr_4?branch=develop)

ReactJS - Typescript - Redux - RxJS - Redux-Observable

Example of use of mobx inside a component:

```jsx
import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import { useStores } from "madu/hooks/use-store";

export const TestComponent = observer(() => {
    const { clientStore } = useStores();

    useEffect(() => {
        clientStore.add({
            id: "test1",
            phone: "0000000000",
            ...
        });
    }, []);

    return (
        <>
            {clientStore.clients.map(client => (
                <div key={client.id}>
                    <div>{client.adress}</div>
                    <div>{client.contact_email}</div>
                </div>
            ))}
        </>
    );
});


```

## Back-end

Node.js - NestJS - Typescript - MongoDB

[Lien du projet](https://github.com/ayshiff/madu_gr_4/tree/develop/back-end)

## Infrastructure

Ansible - Terraform - AWS

[Lien du projet](https://github.com/ayshiff/madu_gr_4/tree/develop/.cloud)
