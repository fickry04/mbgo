"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ActionIcon, Affix, Button, Card, Center, Group, Modal, Stack, Text } from "@mantine/core";
import { IconDice } from "@tabler/icons-react";

function randomDie() {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

function dieChar(v: 1 | 2 | 3 | 4 | 5 | 6) {
  // Unicode dice faces: ⚀⚁⚂⚃⚄⚅
  return String.fromCharCode(0x267f + v);
}

export function DiceRollFab() {
  const [opened, setOpened] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [die1, setDie1] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [die2, setDie2] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const rollAudioRef = useRef<HTMLAudioElement | null>(null);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    timeoutRef.current = null;
  }, []);

  useEffect(() => {
    rollAudioRef.current = new Audio("/roll-dice.mp3");
    rollAudioRef.current.preload = "auto";
    return () => {
      rollAudioRef.current?.pause();
      rollAudioRef.current = null;
      clearTimers();
    };
  }, [clearTimers]);

  const roll = useCallback(() => {
    if (rolling) return;

    clearTimers();
    setRolling(true);

    const audio = rollAudioRef.current;
    if (audio) {
      try {
        audio.currentTime = 0;
        void audio.play();
      } catch {
        // ignore autoplay / playback errors
      }
    }

    intervalRef.current = window.setInterval(() => {
      setDie1(randomDie());
      setDie2(randomDie());
    }, 70);

    timeoutRef.current = window.setTimeout(() => {
      clearTimers();
      setDie1(randomDie());
      setDie2(randomDie());
      setRolling(false);
    }, 900);
  }, [clearTimers, rolling]);

  const total = die1 + die2;

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }} zIndex={250}>
        <ActionIcon
          className="mbg-click"
          size={56}
          radius="xl"
          variant="filled"
          onClick={() => {
            setOpened(true);
            roll();
          }}
          aria-label="Roll dadu"
        >
          <IconDice size={24} />
        </ActionIcon>
      </Affix>

      <Modal opened={opened} onClose={() => setOpened(false)} title="Roll Dadu" centered>
        <Stack gap="sm">
          <Group justify="center" gap="md">
            <Card
              withBorder
              radius="md"
              padding={0}
              w={84}
              h={84}
              className={rolling ? "mbg-dice-roll" : ""}
            >
              <Center h="100%">
                <Text fw={800} style={{ fontSize: 44, lineHeight: 1 }}>
                  {dieChar(die1)}
                </Text>
              </Center>
            </Card>
            <Card
              withBorder
              radius="md"
              padding={0}
              w={84}
              h={84}
              className={rolling ? "mbg-dice-roll" : ""}
            >
              <Center h="100%">
                <Text fw={800} style={{ fontSize: 44, lineHeight: 1 }}>
                  {dieChar(die2)}
                </Text>
              </Center>
            </Card>
          </Group>

          <Stack gap={2} align="center">
            <Text c="dimmed" size="sm">
              Hasil: {die1} + {die2}
            </Text>
            <Text fw={800} size="xl">
              Total: {total}
            </Text>
          </Stack>

          <Group justify="flex-end">
            <Button className="mbg-click" variant="default" onClick={() => setOpened(false)}>
              Tutup
            </Button>
            <Button className="mbg-click" onClick={roll} loading={rolling}>
              Roll lagi
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
