import { createContext } from 'react'
import io from 'socket.io-client'
import {SOCKET_ENDPOINT} from "./EnvConfig";

const endpoint = SOCKET_ENDPOINT
export const socket = io(endpoint)

export const SocketAPI = createContext()