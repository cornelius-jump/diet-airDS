import {Card, Container, Flex, Grid, Heading, Stack, Text, Box} from '@sanity/ui'
import {useEffect, useState} from 'react'
import {useClient} from 'sanity'
import styled from 'styled-components'

const ColorSwatch = styled.div<{$color: string}>`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${(props) => props.$color};
  border: 2px solid var(--card-border-color);
`

const TeamCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

interface Team {
  _id: string
  name: string
  shortName: string
  sport: string
  city: string
  buttonRadius: string
  brandColors: {
    core?: string
    light?: string
    interactive?: string
  }
}

export function Dashboard() {
  const client = useClient({apiVersion: '2024-01-01'})
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch<Team[]>(
        `*[_type == "team"] | order(name asc) {
        _id,
        name,
        shortName,
        sport,
        city,
        buttonRadius,
        brandColors
      }`
      )
      .then((data) => {
        setTeams(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [client])

  if (loading) {
    return (
      <Container width={5} padding={4}>
        <Text>Loading teams...</Text>
      </Container>
    )
  }

  const sportGroups = teams.reduce(
    (acc, team) => {
      const sport = team.sport || 'Other'
      if (!acc[sport]) acc[sport] = []
      acc[sport].push(team)
      return acc
    },
    {} as Record<string, Team[]>
  )

  return (
    <Container width={5} padding={4}>
      <Stack space={5}>
        <Stack space={3}>
          <Heading as="h1" size={3}>
            Diet AirDS Dashboard
          </Heading>
          <Text size={2} muted>
            Managing {teams.length} teams across {Object.keys(sportGroups).length} sports
          </Text>
        </Stack>

        <Stack space={4}>
          {Object.entries(sportGroups).map(([sport, sportTeams]) => (
            <Stack key={sport} space={3}>
              <Heading as="h2" size={2}>
                {sport} ({sportTeams.length})
              </Heading>
              <Grid columns={[1, 2, 3]} gap={3}>
                {sportTeams.map((team) => (
                  <TeamCard
                    key={team._id}
                    padding={4}
                    radius={2}
                    shadow={1}
                    onClick={() => {
                      window.location.href = `/structure/team;${team._id}`
                    }}
                  >
                    <Stack space={3}>
                      <Flex justify="space-between" align="center">
                        <Stack space={1}>
                          <Heading as="h3" size={1}>
                            {team.name}
                          </Heading>
                          <Text size={1} muted>
                            {team.city}
                          </Text>
                        </Stack>
                      </Flex>

                      <Flex gap={2}>
                        {team.brandColors?.core && (
                          <ColorSwatch $color={team.brandColors.core} title="Core" />
                        )}
                        {team.brandColors?.light && (
                          <ColorSwatch $color={team.brandColors.light} title="Light" />
                        )}
                        {team.brandColors?.interactive && (
                          <ColorSwatch $color={team.brandColors.interactive} title="Interactive" />
                        )}
                      </Flex>

                      <Flex gap={2} align="center">
                        <Box
                          style={{
                            width: '40px',
                            height: '24px',
                            background: 'var(--card-fg-color)',
                            borderRadius: team.buttonRadius || '8px',
                          }}
                        />
                        <Text size={1} muted>
                          {team.buttonRadius || '8px'}
                        </Text>
                      </Flex>
                    </Stack>
                  </TeamCard>
                ))}
              </Grid>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
