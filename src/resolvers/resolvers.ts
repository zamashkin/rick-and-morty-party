import { gql } from 'apollo-boost';

const EXCLUDED_CHARACTERS_QUERY = gql`
    {
        excludedCharactersIds @client
    }
`;

export const resolvers = {
    Mutation: {
        addCharacterIdToExcluded: (_: undefined, args: { id: number }, context: any): void => {
            const { excludedCharactersIds } = context.cache.readQuery({
                query: EXCLUDED_CHARACTERS_QUERY,
            });

            context.cache.writeData({
                data: {
                    excludedCharactersIds: [...excludedCharactersIds, args.id],
                },
            });
        },
    },
};
